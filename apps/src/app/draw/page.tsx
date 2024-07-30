// pages/index.js
"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FiMousePointer,
  FiSquare,
  FiCircle,
  FiType,
  FiImage,
  FiMinus,
  FiPenTool,
} from "react-icons/fi";

const drawElement = (ctx, element) => {
  ctx.beginPath();
  ctx.strokeStyle = element.strokeColor || "#000";
  ctx.lineWidth = element.strokeWidth || 1;

  if (element.type === "rectangle") {
    if (element.fill) {
      ctx.fillStyle = element.fillColor || "transparent";
      ctx.fillRect(element.x, element.y, element.width, element.height);
    }
    ctx.rect(element.x, element.y, element.width, element.height);
  } else if (element.type === "ellipse") {
    ctx.ellipse(
      element.x,
      element.y,
      element.radiusX,
      element.radiusY,
      0,
      0,
      2 * Math.PI
    );
    if (element.fill) {
      ctx.fillStyle = element.fillColor || "transparent";
      ctx.fill();
    }
  } else if (element.type === "line") {
    ctx.moveTo(element.x1, element.y1);
    ctx.lineTo(element.x2, element.y2);
  } else if (element.type === "pencil") {
    ctx.moveTo(element.points[0].x, element.points[0].y);
    for (let i = 1; i < element.points.length; i++) {
      ctx.lineTo(element.points[i].x, element.points[i].y);
    }
  } else if (element.type === "text") {
    ctx.font = `${element.fontSize}px ${element.fontFamily}`;
    ctx.fillText(element.text, element.x, element.y);
  }
  ctx.stroke();
  ctx.closePath();
};

const drawGrid = (ctx, gridSize, width, height) => {
  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 0.5;

  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};

export default function Home() {
  const [elements, setElements] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [currentTool, setCurrentTool] = useState("selection");
  const [currentColor, setCurrentColor] = useState("#1e1e1e");
  const [currentFillColor, setCurrentFillColor] = useState("transparent");
  const [currentWidth, setCurrentWidth] = useState(1);
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("Virgil");
  const [fill, setFill] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [recentColors, setRecentColors] = useState([
    "#1e1e1e",
    "#ffffff",
    "#e03131",
    "#2f9e44",
    "#1971c2",
    "#f08c00",
  ]);
  const [viewMode, setViewMode] = useState("default");
  const [gridSize, setGridSize] = useState(20);
  const [showGrid, setShowGrid] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (historyIndex >= 0) {
      setHistory((prevHistory) => [
        ...prevHistory.slice(0, historyIndex + 1),
        elements,
      ]);
      setHistoryIndex((prevIndex) => prevIndex + 1);
    }
  }, [elements]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex((prevIndex) => prevIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prevIndex) => prevIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  }, [history, historyIndex]);

  const clearCanvas = useCallback(() => {
    setElements([]);
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  const exportToJSON = useCallback(() => {
    const dataStr = JSON.stringify(elements);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "drawing.json";
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }, [elements]);

  const importFromJSON = useCallback((event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedElements = JSON.parse(e.target.result);
        setElements(importedElements);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case "z":
            event.preventDefault();
            undo();
            break;
          case "y":
            event.preventDefault();
            redo();
            break;
          case "a":
            event.preventDefault();
            setSelectedElements(elements);
            break;
        }
      } else {
        switch (event.key) {
          case "Delete":
            setElements(
              elements.filter((el) => !selectedElements.includes(el))
            );
            setSelectedElements([]);
            break;
          case "Escape":
            setSelectedElements([]);
            setCurrentTool("selection");
            break;
        }
      }
    },
    [undo, redo, elements, selectedElements]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    if (showGrid) {
      drawGrid(ctx, gridSize, canvas.width, canvas.height);
    }

    elements.forEach((element) => {
      drawElement(ctx, element);
    });

    ctx.restore();
  }, [elements, zoom, pan, showGrid, gridSize]);

  return (
    <div className={`excalidraw-clone flex h-screen ${viewMode}`}>
      <Sidebar
        elements={elements}
        setElements={setElements}
        selectedElements={selectedElements}
        setSelectedElements={setSelectedElements}
      />
      <div className="flex-1 flex flex-col">
        <Toolbar
          currentTool={currentTool}
          setCurrentTool={setCurrentTool}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentFillColor={currentFillColor}
          setCurrentFillColor={setCurrentFillColor}
          currentWidth={currentWidth}
          setCurrentWidth={setCurrentWidth}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          fill={fill}
          setFill={setFill}
          undo={undo}
          redo={redo}
          clearCanvas={clearCanvas}
          exportToJSON={exportToJSON}
          importFromJSON={importFromJSON}
          zoom={zoom}
          setZoom={setZoom}
          recentColors={recentColors}
          setRecentColors={setRecentColors}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isFullScreen={isFullScreen}
          toggleFullScreen={toggleFullScreen}
        />
        <div className="relative flex-1 overflow-hidden">
          <canvas
            ref={canvasRef}
            width={window.innerWidth * 2}
            height={window.innerHeight * 2}
            onMouseDown={(e) => {
              if (currentTool === "selection") {
                setSelectedElements([]);
              } else {
                setIsDrawing(true);
                setStartPoint({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
              }
            }}
            onMouseMove={(e) => {
              if (isDrawing && startPoint) {
                const x = e.nativeEvent.offsetX;
                const y = e.nativeEvent.offsetY;
                const newElement = createElement(currentTool, startPoint, { x, y }, currentColor, currentWidth, fill, currentFillColor, fontSize, fontFamily);
                setElements((prevElements) => [...prevElements, newElement]);
              }
            }}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
          />
        </div>
      </div>
    </div>
  );
}

const createElement = (type, startPoint, endPoint, color, width, fill, fillColor, fontSize, fontFamily) => {
  const id = uuidv4();
  const element = { id, type, strokeColor: color, strokeWidth: width, fill, fillColor };

  switch (type) {
    case "rectangle":
      return { ...element, x: startPoint.x, y: startPoint.y, width: endPoint.x - startPoint.x, height: endPoint.y - startPoint.y };
    case "ellipse":
      return { ...element, x: (startPoint.x + endPoint.x) / 2, y: (startPoint.y + endPoint.y) / 2, radiusX: Math.abs((endPoint.x - startPoint.x) / 2), radiusY: Math.abs((endPoint.y - startPoint.y) / 2) };
    case "line":
      return { ...element, x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y };
    case "pencil":
      return { ...element, points: [{ x: startPoint.x, y: startPoint.y }, { x: endPoint.x, y: endPoint.y }] };
    case "text":
      return { ...element, x: startPoint.x, y: startPoint.y, text: "Text", fontSize, fontFamily };
    default:
      return element;
  }
};

const Sidebar = ({ elements, setElements, selectedElements, setSelectedElements }) => {
  // Implement Sidebar component as per your design
  return <div className="sidebar">Sidebar content</div>;
};

const Toolbar = ({
  currentTool,
  setCurrentTool,
  currentColor,
  setCurrentColor,
  currentFillColor,
  setCurrentFillColor,
  currentWidth,
  setCurrentWidth,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  fill,
  setFill,
  undo,
  redo,
  clearCanvas,
  exportToJSON,
  importFromJSON,
  zoom,
  setZoom,
  recentColors,
  setRecentColors,
  viewMode,
  setViewMode,
  isFullScreen,
  toggleFullScreen,
}) => {
  return (
    <div className="toolbar">
      <button onClick={() => setCurrentTool("selection")}>
        <FiMousePointer />
      </button>
      <button onClick={() => setCurrentTool("rectangle")}>
        <FiSquare />
      </button>
      <button onClick={() => setCurrentTool("ellipse")}>
        <FiCircle />
      </button>
      <button onClick={() => setCurrentTool("line")}>
        <FiMinus />
      </button>
      <button onClick={() => setCurrentTool("pencil")}>
        <FiPenTool />
      </button>
      <button onClick={() => setCurrentTool("text")}>
        <FiType />
      </button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={exportToJSON}>Export</button>
      <input type="file" accept="application/json" onChange={importFromJSON} />
      <input
        type="color"
        value={currentColor}
        onChange={(e) => setCurrentColor(e.target.value)}
      />
      <input
        type="color"
        value={currentFillColor}
        onChange={(e) => setCurrentFillColor(e.target.value)}
      />
      <input
        type="number"
        value={currentWidth}
        onChange={(e) => setCurrentWidth(Number(e.target.value))}
        min={1}
      />
      <input
        type="number"
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        min={10}
      />
      <select
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
      >
        <option value="Virgil">Virgil</option>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
      <label>
        Fill
        <input
          type="checkbox"
          checked={fill}
          onChange={(e) => setFill(e.target.checked)}
        />
      </label>
      <button onClick={toggleFullScreen}>
        {isFullScreen ? "Exit Full Screen" : "Full Screen"}
      </button>
      <div>
        <button onClick={() => setZoom(zoom + 0.1)}>Zoom In</button>
        <button onClick={() => setZoom(zoom - 0.1)}>Zoom Out</button>
      </div>
      <div>
        <label>
          Grid Size:
          <input
            type="number"
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            min={10}
          />
        </label>
        <label>
          Show Grid
          <input
            type="checkbox"
            checked={viewMode === "grid"}
            onChange={(e) => setViewMode(e.target.checked ? "grid" : "default")}
          />
        </label>
      </div>
    </div>
  );
};
