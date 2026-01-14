import React from 'react';
import styles from './hero-composite.module.css';

interface SuccessModalCompositeProps {
  interest: string;
  onClose: () => void;
}

const SuccessModalComposite: React.FC<SuccessModalCompositeProps> = ({ interest, onClose }) => (
  <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="heroQuoteModalTitle">
    <div className={styles.modal}>
      <h2 id="heroQuoteModalTitle" className={styles.modalTitle}>Confirm Submission</h2>
      <p className={styles.modalText}>We received your {interest} quote details. Proceed back to the homepage?</p>
      <div className={styles.modalActions}>
        <button
          type="button"
          className={styles.btnPrimary}
          onClick={onClose}
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
);

export default SuccessModalComposite;
