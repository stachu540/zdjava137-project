package pro.sdacademy.zdjava137.group3.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.data.annotation.Id;
import pro.sdacademy.zdjava137.group3.entity.Category;

@Data
public class CategoryAddDTO {

    @NotBlank(message = "Name is required")
    private String name;
    @NotBlank(message = "Description is required")
    private String description;


    private Category parent;

}
