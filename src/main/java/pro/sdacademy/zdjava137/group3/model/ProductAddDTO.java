package pro.sdacademy.zdjava137.group3.model;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProductAddDTO {

        @NotBlank(message = "Name is required")
        private String name;
        @NotBlank(message = "Description is required")
        private String description;
        @Positive
        private double price;
        @PositiveOrZero
        private int quantity;
}
