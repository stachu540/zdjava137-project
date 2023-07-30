package pro.sdacademy.zdjava137.group3.model;

import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class CategoryParentIdDTO {

    @NotNull(message = "Parent Id is required")
    private Long parentId;
}
