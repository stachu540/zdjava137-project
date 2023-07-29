package pro.sdacademy.zdjava137.group3.model;

import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import pro.sdacademy.zdjava137.group3.entity.Category;

@Data
public class CategoryUpdateDTO {

    @NotBlank(message = "Description is required")
    private String name;
    @NotBlank(message = "Description is required")
    private String description;
    @OneToOne
    private Category parent;
}
