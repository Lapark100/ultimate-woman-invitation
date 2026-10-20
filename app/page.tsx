"use client";

import { useRef, useState } from "react";
import "./invitation.css";

export default function InvitationPage() {
  const introVideoRef = useRef<HTMLVideoElement>(null);

  const [introComplete, setIntroComplete] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Replace this with your actual Typeform URL
  const typeformUrl =
    "https://1w1ox1g7qlc.typeform.com/to/sFdMdqBT";

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setVideoError(false);
  };

  const handleIntroError = () => {
    setVideoError(true);
  };

  const handleRetry = () => {
    // Clear the error first so the video element mounts again
    setVideoError(false);
  };

  return (
    <main className="invitation-page">
      <div className="invitation-frame">

        {/* INTRO VIDEO */}

        {!introComplete && !videoError && (
          <div className="video-container">
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
          </div>
        )}

        {/* VIDEO ERROR */}

        {videoError && !introComplete && (
          <div className="video-error">
            <p>The opening animation could not play.</p>

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

            <h1 className="invitation-heading">
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

              <div className="event-detail">
                <span>DATE</span>
                <p>Sunday, 8th November 2026</p>
              </div>

              <div className="event-detail">
                <span>TIME</span>
                <p>4:00 PM</p>
              </div>

              <div className="event-detail">
                <span>VENUE</span>
                <p>The Waterside Venue, Lekki</p>
                <small>Admiralty Road, Lekki, Lagos</small>
              </div>

              <div className="event-detail">
                <span>DRESS CODE</span>
                <p>Business Casual</p>
              </div>

            </div>

            {/* RSVP */}

            <div className="rsvp-section">

              <p>Kindly confirm your presence</p>

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