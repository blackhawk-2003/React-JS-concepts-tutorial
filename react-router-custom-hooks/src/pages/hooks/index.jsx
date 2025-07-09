import { useRef, useState, useCallback, useMemo } from "react";
import "./styles.css";

const Hooks = () => {
  // useState for count that triggers re-renders
  const [count, setCount] = useState(0);

  // useRef for storing previous count value
  const previousCountRef = useRef(0);

  // useCallback for memoized increment function
  const incrementCount = useCallback(() => {
    setCount((prevCount) => {
      previousCountRef.current = prevCount;
      return prevCount + 1;
    });
  }, []);

  // useCallback for memoized decrement function
  const decrementCount = useCallback(() => {
    setCount((prevCount) => {
      previousCountRef.current = prevCount;
      return prevCount - 1;
    });
  }, []);

  // useCallback for memoized reset function
  const resetCount = useCallback(() => {
    setCount(0);
    previousCountRef.current = 0;
  }, []);

  // useMemo for expensive calculation (double the count)
  const doubledCount = useMemo(() => {
    console.log("Calculating doubled count...");
    return count * 2;
  }, [count]);

  // useMemo for count status
  const countStatus = useMemo(() => {
    if (count === 0) return "Zero";
    if (count > 0) return "Positive";
    return "Negative";
  }, [count]);

  return (
    <div className="hooks-container">
      <h1 className="hooks-title">React Hooks Examples</h1>
      <p className="hooks-subtitle">
        useState, useRef, useCallback, and useMemo
      </p>

      <div className="hooks-content">
        <div className="counter-section">
          <h2 className="section-title">Counter with useState</h2>
          <div className="counter-display">
            <p className="count-text">
              Current Count: <span className="count-value">{count}</span>
            </p>
            <p className="previous-count">
              Previous Count:{" "}
              <span className="previous-value">{previousCountRef.current}</span>
            </p>
            <p className="doubled-count">
              Doubled Count:{" "}
              <span className="doubled-value">{doubledCount}</span>
            </p>
            <p className="count-status">
              Status:{" "}
              <span className={`status-value ${countStatus.toLowerCase()}`}>
                {countStatus}
              </span>
            </p>
          </div>

          <div className="counter-buttons">
            <button
              onClick={decrementCount}
              className="counter-button decrement"
            >
              <span className="button-icon">➖</span>
              Decrease
            </button>
            <button
              onClick={incrementCount}
              className="counter-button increment"
            >
              <span className="button-icon">➕</span>
              Increase
            </button>
            <button onClick={resetCount} className="counter-button reset">
              <span className="button-icon">🔄</span>
              Reset
            </button>
          </div>
        </div>

        <div className="hooks-explanation">
          <h2 className="section-title">Hooks Explanation</h2>
          <div className="explanation-grid">
            <div className="explanation-card">
              <h3>useState</h3>
              <p>
                Manages the count state and triggers re-renders when updated.
              </p>
            </div>
            <div className="explanation-card">
              <h3>useRef</h3>
              <p>
                Stores the previous count value without triggering re-renders.
              </p>
            </div>
            <div className="explanation-card">
              <h3>useCallback</h3>
              <p>
                Memoizes the increment/decrement functions to prevent
                unnecessary re-renders.
              </p>
            </div>
            <div className="explanation-card">
              <h3>useMemo</h3>
              <p>
                Memoizes expensive calculations (doubled count) and only
                recalculates when count changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
