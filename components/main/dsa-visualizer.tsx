"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

type BarColor = "idle" | "comparing" | "swapping" | "sorted";

interface Step {
  array: number[];
  colors: BarColor[];
  description: string;
}

function randomArray(size: number): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
}

// ─── Step generators ────────────────────────────────────────────────────────

function bubbleSortSteps(input: number[]): Step[] {
  const steps: Step[] = [];
  const a = [...input];
  const n = a.length;
  const sorted = new Set<number>();

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const colors: BarColor[] = a.map((_, k) =>
        sorted.has(k) ? "sorted" : k === j || k === j + 1 ? "comparing" : "idle"
      );
      steps.push({ array: [...a], colors, description: `Comparing index ${j} (${a[j]}) and ${j + 1} (${a[j + 1]})` });

      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        const swapColors: BarColor[] = a.map((_, k) =>
          sorted.has(k) ? "sorted" : k === j || k === j + 1 ? "swapping" : "idle"
        );
        steps.push({ array: [...a], colors: swapColors, description: `Swapped — ${a[j + 1]} and ${a[j]}` });
      }
    }
    sorted.add(n - 1 - i);
  }
  sorted.add(0);
  steps.push({ array: [...a], colors: a.map(() => "sorted"), description: "Sorted! ✅" });
  return steps;
}

function selectionSortSteps(input: number[]): Step[] {
  const steps: Step[] = [];
  const a = [...input];
  const n = a.length;
  const sorted = new Set<number>();

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      const colors: BarColor[] = a.map((_, k) =>
        sorted.has(k) ? "sorted" : k === minIdx ? "swapping" : k === j ? "comparing" : k < i ? "sorted" : "idle"
      );
      steps.push({ array: [...a], colors, description: `Finding min — comparing index ${j} (${a[j]}) with current min ${a[minIdx]}` });
      if (a[j] < a[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      const swapColors: BarColor[] = a.map((_, k) =>
        sorted.has(k) ? "sorted" : k === i || k === minIdx ? "swapping" : k < i ? "sorted" : "idle"
      );
      steps.push({ array: [...a], colors: swapColors, description: `Placed ${a[i]} at index ${i}` });
    }
    sorted.add(i);
  }
  sorted.add(n - 1);
  steps.push({ array: [...a], colors: a.map(() => "sorted"), description: "Sorted! ✅" });
  return steps;
}

function insertionSortSteps(input: number[]): Step[] {
  const steps: Step[] = [];
  const a = [...input];
  const n = a.length;

  for (let i = 1; i < n; i++) {
    const key = a[i];
    let j = i - 1;
    steps.push({
      array: [...a],
      colors: a.map((_, k) => (k < i ? "sorted" : k === i ? "comparing" : "idle")),
      description: `Inserting ${key} into sorted portion`,
    });
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      steps.push({
        array: [...a],
        colors: a.map((_, k) => (k === j || k === j + 1 ? "swapping" : k < i ? "sorted" : "idle")),
        description: `Shifting ${a[j]} right`,
      });
      j--;
    }
    a[j + 1] = key;
  }
  steps.push({ array: [...a], colors: a.map(() => "sorted"), description: "Sorted! ✅" });
  return steps;
}

function quickSortSteps(input: number[]): Step[] {
  const steps: Step[] = [];
  const a = [...input];

  function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      const colors: BarColor[] = arr.map((_, k) =>
        k === high ? "swapping" : k === j ? "comparing" : k <= i ? "sorted" : "idle"
      );
      steps.push({ array: [...arr], colors, description: `Pivot: ${pivot} — checking index ${j} (${arr[j]})` });
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({
      array: [...arr],
      colors: arr.map((_, k) => (k === i + 1 ? "swapping" : "idle")),
      description: `Pivot ${pivot} placed at index ${i + 1}`,
    });
    return i + 1;
  }

  function qs(arr: number[], low: number, high: number) {
    if (low < high) {
      const pi = partition(arr, low, high);
      qs(arr, low, pi - 1);
      qs(arr, pi + 1, high);
    }
  }

  qs(a, 0, a.length - 1);
  steps.push({ array: [...a], colors: a.map(() => "sorted"), description: "Sorted! ✅" });
  return steps;
}

const ALGORITHMS = [
  { id: "bubble", label: "Bubble Sort", time: "O(n²)", space: "O(1)", fn: bubbleSortSteps },
  { id: "selection", label: "Selection Sort", time: "O(n²)", space: "O(1)", fn: selectionSortSteps },
  { id: "insertion", label: "Insertion Sort", time: "O(n²)", space: "O(1)", fn: insertionSortSteps },
  { id: "quick", label: "Quick Sort", time: "O(n log n)", space: "O(log n)", fn: quickSortSteps },
] as const;

type AlgoId = (typeof ALGORITHMS)[number]["id"];

const COLOR_MAP: Record<BarColor, string> = {
  idle: "bg-purple-700",
  comparing: "bg-cyan-400",
  swapping: "bg-orange-400",
  sorted: "bg-green-500",
};

const SPEEDS = [
  { label: "Slow", ms: 250 },
  { label: "Medium", ms: 100 },
  { label: "Fast", ms: 30 },
];

export const DsaVisualizer = () => {
  const ARRAY_SIZE = 20;

  const [algoId, setAlgoId] = useState<AlgoId>("bubble");
  const [array, setArray] = useState<number[]>(() => randomArray(ARRAY_SIZE));
  const [colors, setColors] = useState<BarColor[]>(() => Array(ARRAY_SIZE).fill("idle"));
  const [description, setDescription] = useState("Press Play to start the visualisation.");
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState<Step[]>([]);
  const [speedIdx, setSpeedIdx] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectedAlgo = ALGORITHMS.find((a) => a.id === algoId)!;

  const generateNewArray = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPlaying(false);
    const arr = randomArray(ARRAY_SIZE);
    setArray(arr);
    setColors(Array(ARRAY_SIZE).fill("idle"));
    setDescription("Press Play to start the visualisation.");
    setStepIndex(0);
    setSteps([]);
  }, []);

  const handleAlgoChange = useCallback(
    (id: AlgoId) => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
      setAlgoId(id);
      setColors(Array(ARRAY_SIZE).fill("idle"));
      setDescription("Press Play to start the visualisation.");
      setStepIndex(0);
      setSteps([]);
    },
    []
  );

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
      return;
    }

    let currentSteps = steps;
    let currentIndex = stepIndex;

    if (currentSteps.length === 0 || currentIndex >= currentSteps.length) {
      currentSteps = selectedAlgo.fn(array);
      setSteps(currentSteps);
      currentIndex = 0;
      setStepIndex(0);
    }

    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      if (currentIndex >= currentSteps.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsPlaying(false);
        return;
      }
      const step = currentSteps[currentIndex];
      setArray(step.array);
      setColors(step.colors);
      setDescription(step.description);
      setStepIndex(currentIndex + 1);
      currentIndex++;
    }, SPEEDS[speedIdx].ms);
  }, [isPlaying, steps, stepIndex, selectedAlgo, array, speedIdx]);

  // Stop and recompute when speed changes mid-play
  useEffect(() => {
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    }
  }, [isPlaying, speedIdx]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const progress = steps.length > 0 ? Math.round((stepIndex / steps.length) * 100) : 0;

  return (
    <section
      id="dsa-visualizer"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl"
      >
        {/* Header */}
        <motion.div variants={slideInFromLeft(0.3)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-pink-500/80 to-transparent" />
            <span className="section-tag">algorithms</span>
          </div>
          <h1 className="text-4xl md:text-[44px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 leading-tight">
            Algorithm Visualizer
          </h1>
          <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-3 mb-2" />
          <p className="text-gray-400 mt-2">
            Watch sorting algorithms animate step-by-step. Select an algorithm, generate an array, and hit Play.
          </p>
        </motion.div>

        {/* Algorithm selector */}
        <motion.div variants={slideInFromLeft(0.4)} className="flex flex-wrap gap-3 mb-6">
          {ALGORITHMS.map((algo) => (
            <button
              key={algo.id}
              onClick={() => handleAlgoChange(algo.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition border ${
                algoId === algo.id
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-[#0a0616]/60 border-[#2A0E61] text-gray-300 hover:border-purple-500/50"
              }`}
            >
              {algo.label}
              <span className="ml-2 text-xs opacity-60">{algo.time}</span>
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div variants={slideInFromLeft(0.45)} className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={handlePlay}
            className={`px-5 py-2.5 rounded-lg font-semibold text-white transition ${
              isPlaying
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {isPlaying ? "⏸ Pause" : stepIndex > 0 && stepIndex < steps.length ? "▶ Resume" : "▶ Play"}
          </button>
          <button
            onClick={generateNewArray}
            className="px-5 py-2.5 rounded-lg font-semibold text-white bg-[#0a0616]/80 border border-[#2A0E61] hover:border-purple-500/50 transition"
          >
            🔀 New Array
          </button>

          {/* Speed */}
          <div className="flex items-center gap-2 ml-2">
            <span className="text-gray-400 text-sm">Speed:</span>
            {SPEEDS.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setSpeedIdx(i)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition border ${
                  speedIdx === i
                    ? "bg-cyan-600 border-cyan-500 text-white"
                    : "bg-[#0a0616]/60 border-[#2A0E61] text-gray-400 hover:border-cyan-500/40"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Complexity info */}
        <motion.div variants={slideInFromLeft(0.5)} className="flex gap-4 mb-6">
          <span className="text-xs px-3 py-1 rounded-full border border-purple-500/30 text-purple-300 bg-purple-500/10">
            Time: {selectedAlgo.time}
          </span>
          <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
            Space: {selectedAlgo.space}
          </span>
        </motion.div>

        {/* Visualizer canvas */}
        <motion.div
          variants={slideInFromLeft(0.55)}
          className="w-full border border-[#2A0E61] rounded-xl bg-[#0a0616]/80 p-4 md:p-6 mb-4"
        >
          {/* Progress bar */}
          {steps.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          )}

          {/* Bars */}
          <div className="flex items-end justify-center gap-[3px] h-52">
            {array.map((val, i) => (
              <motion.div
                key={i}
                className={`rounded-t-sm transition-colors duration-100 ${COLOR_MAP[colors[i] ?? "idle"]}`}
                style={{
                  height: `${val}%`,
                  flex: "1",
                  minWidth: "6px",
                  maxWidth: "24px",
                }}
                layout
                transition={{ duration: 0.05 }}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs text-gray-400">
            {(Object.entries(COLOR_MAP) as [BarColor, string][]).map(([state, cls]) => (
              <span key={state} className="flex items-center gap-1.5">
                <span className={`inline-block w-3 h-3 rounded-sm ${cls}`} />
                {state.charAt(0).toUpperCase() + state.slice(1)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Status message */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="p-3 rounded-lg border border-[#2A0E61] bg-[#0a0616]/60 text-sm font-mono text-cyan-300 min-h-[44px]"
        >
          &gt; {description}
        </motion.div>
      </motion.div>
    </section>
  );
};
