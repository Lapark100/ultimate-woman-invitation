
"use client";

import { useRef, useState } from "react";
import "./invitation.css";

export default function InvitationPage() {
  const introVideoRef = useRef<HTMLVideoElement>(null);

  const [introComplete, setIntroComplete] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Replace with your actual Typeform registration link
  const typeformUrl =
    "https://1w1ox1g7qlc.typeform.com/to/sFdMdqBT";

  // First animation finishes and reveals the event details
  const handleIntroComplete = () => {
    setIntroComplete(true);
    setVideoError(false);
  };

  // Handle an error loading the intro video
  const handleIntroError = () => {
    setVideoError(true);
  };

  // Retry the intro video
  const handleRetry = () => {
    const video = introVideoRef.current;

    if (!video) return;

    setVideoError(false);
    video.currentTime = 0;

    video.play().catch((error) => {
      console.error("Intro video playback failed:", error);
      setVideoError(true);
    });
  };

  return (
    <main className="invitation-page">
      <div className="invitation-frame">

        {/* FIRST ANIMATION */}

        {!introComplete && !videoError && (
          <video
            ref={introVideoRef}
            className="invitation-video"
            src="/videos/ultimate-woman-intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleIntroComplete}
            onError={handleIntroError}
          />
        )}

        {/* VIDEO ERROR */}

        {videoError && !introComplete && (
          <div className="video-error">
            <p>
              The opening animation could not play.
            </p>

            <button
              type="button"
              className="retry-button"
              onClick={handleRetry}
            >
              TRY AGAIN
            </button>
          </div>
        )}

        {/* EVENT INVITATION */}

        {introComplete && (
          <section className="invitation-content">

            <p className="eyebrow">
              YOU ARE CORDIALLY INVITED
            </p>

            <h1>
              THE
              <br />
              ULTIMATE
              <br />
              WOMAN
            </h1>

            <div className="gold-line" />

            <p className="host-label">
              An evening with
            </p>

            <h2 className="host-name">
              Amb. Dr. Genevieve Tambari Fadeh
            </h2>

            <p className="event-description">
              An evening of elegance, beautiful conversations
              and unforgettable moments.
            </p>

            {/* EVENT DETAILS */}

            <div className="event-details">

              <p>
                <span>DATE</span>
                Sunday, 8th November 2026
              </p>

              <p>
                <span>TIME</span>
                4:00 PM
              </p>

              <p>
                <span>VENUE</span>
                The Waterside Venue, Lekki
              </p>

              <p>
                <span>DRESS CODE</span>
                Business Casual
              </p>

            </div>

            {/* DIRECT TYPEFORM LINK */}

            <div className="rsvp-section">

              <p>
                Kindly confirm your presence
              </p>

              <a
                href={typeformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rsvp-button"
              >
                CLICK TO RSVP
                <span aria-hidden="true"> ↗</span>
              </a>

              <p className="closing-message">
                Until then, dear reader, we eagerly await your presence.
              </p>

            </div>

          </section>
        )}

      </div>
    </main>
  );
}
