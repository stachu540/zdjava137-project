package pro.sdacademy.zdjava137.group3.controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pro.sdacademy.zdjava137.group3.service.CategoryService;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryService categoryService;


    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    public String categories(Model model) {
        return "categories";
    }

    @GetMapping("/{id}")
    public String category(@PathVariable long id, Model model) {
        return "category";
    }


}
