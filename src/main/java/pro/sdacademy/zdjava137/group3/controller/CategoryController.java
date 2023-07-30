package pro.sdacademy.zdjava137.group3.controller;


import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pro.sdacademy.zdjava137.group3.entity.Category;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;
import pro.sdacademy.zdjava137.group3.model.CategoryAddDTO;
import pro.sdacademy.zdjava137.group3.model.CategoryUpdateDTO;
import pro.sdacademy.zdjava137.group3.service.CategoryService;

import java.util.Collection;
import java.util.Optional;


@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService categoryService;


    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    public String categories(Model model) {
        return "categories";
    }

    @GetMapping("/category/{id}")
    public String category(@PathVariable long id, Model model) {
        return "category";
    }


    @GetMapping
    public Collection<Category> getCategories(@PageableDefault(size = 10, sort = "id") Pageable pageable) {
        return categoryService.getCategories(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long id) {
        Optional<Category> category = categoryService.getCategoryById(id);
        return category
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody CategoryAddDTO dto) {
        Category createdCategory = categoryService.createCategory(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable long id, @RequestBody CategoryUpdateDTO dto) {
        Category updatedCategory = categoryService.update(id, dto);
        return ResponseEntity.ok(updatedCategory);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable long id) {
        try {
            categoryService.deleteCategory(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }


}
