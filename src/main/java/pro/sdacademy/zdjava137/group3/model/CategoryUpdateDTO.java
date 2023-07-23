package pro.sdacademy.zdjava137.group3.model;

import lombok.Data;
import pro.sdacademy.zdjava137.group3.entity.Category;

@Data
public class CategoryUpdateDTO {

    private String name;
    private String description;
    private Category parent;
}
