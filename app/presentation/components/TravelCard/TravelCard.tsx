import React from "react";
import styles from "./TravelCard.module.css";
import { Travel } from "@types";
import { OpenEditTravelDialog, OpenShowTravelDialog } from "@hooks/useDialog";
import { deleteTravel } from "@hooks/useTravels";

interface TravelCardProps {
  travel: Travel;
}

const TravelCard: React.FC<TravelCardProps> = ({ travel }) => {
  return (
    <div className={styles.travelCard}>
      <div className={styles.travelCardImageContainer}>
        <img src={travel.photo_url} alt={travel.title} />
      </div>
      <div className={styles.travelCardInfo}>
        <div className={styles.travelCardTitle}>{travel.title}</div>
        <div className={styles.travelCardDescription}>{travel.description}</div>
        <div className={styles.travelCardLinks}>
          <button
            onClick={() => {
              OpenShowTravelDialog(travel.id);
            }}
          >
            See trip details
          </button>
          <div className={styles.rightAlignedLinks}>
            <button
              onClick={() => {
                OpenEditTravelDialog(travel.id);
              }}
            >
              Edit
            </button>
            <button
              className={styles.redLinkButton}
              onClick={() => {
                deleteTravel(travel.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
