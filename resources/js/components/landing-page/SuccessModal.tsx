import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './hero.module.css';

interface SuccessModalProps {
  interest: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ interest, onClose }) => (
  <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="heroQuoteModalTitle">
    <div className={styles.modal}>
      <div className={styles.modalIconWrapper}>
        <CheckCircle2 size={56} strokeWidth={1.5} className={styles.modalIcon} />
      </div>
      <h2 id="heroQuoteModalTitle" className={styles.modalTitle}>Quote Request Received!</h2>
      <p className={styles.modalText}>
        Thank you for your interest in {interest}. We've received your details and a Leeds specialist will contact you shortly to discuss your quote.
      </p>
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

export default SuccessModal;
