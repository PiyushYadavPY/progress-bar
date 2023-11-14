import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 1;
          return newProgress > 100 ? 100 : newProgress;
        });
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        > {progress}%</div>
      </div>
      <div className="progress-info">
        <p>
          {progress < 100 ? `Loading...` : 'Complete!!'}
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
