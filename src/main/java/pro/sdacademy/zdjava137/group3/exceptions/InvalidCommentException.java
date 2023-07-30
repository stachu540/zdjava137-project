package pro.sdacademy.zdjava137.group3.exceptions;

public class InvalidCommentException extends RuntimeException {

    public InvalidCommentException(String message) {
        super(message);
    }

    public InvalidCommentException(String message, Throwable cause) {
        super(message, cause);
    }
}
