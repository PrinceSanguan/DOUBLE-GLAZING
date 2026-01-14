import React from 'react';
import styles from './quote.module.css';

interface QuoteSuccessModalProps {
  interest: string;
  onConfirm: () => void;
}

const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({ interest, onConfirm }) => (
  <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">
    <div className={styles.modal}>
      <h2 id="quoteModalTitle" className={styles.modalTitle}>Confirm Submission</h2>
      <p className={styles.modalText}>
        We received your {interest || 'selected'} quote details. Proceed back to the homepage?
      </p>
      <div className={styles.modalActions}>
        <button type="button" className={styles.btnPrimary} onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  </div>
);

export default QuoteSuccessModal;
