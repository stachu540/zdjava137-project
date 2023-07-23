package pro.sdacademy.zdjava137.group3.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class CategoryParentIdDTO {

    @NotNull(message = "Parent Id is required")
    private Long parentId;


}
