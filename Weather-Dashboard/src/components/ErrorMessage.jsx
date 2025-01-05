/**
 * ErrorMessage component
 *
 * Displays an error message with a frown icon when the city is not found.
 *
 * @returns {JSX.Element} ErrorMessage component JSX
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
/**
 * ErrorMessage function component
 */
function ErrorMessage() {
  return (
    // Error message container with CSS class for styling
    <span className="error-message sm:text-sm">
       {/* Frown icon from Font Awesome */}
      <FontAwesomeIcon icon={faFrown} />
       {/* Error message text with custom font size */}
      <span style={{ fontSize: '20px' }}>City not found</span>
    </span>
  );
}
export default ErrorMessage;