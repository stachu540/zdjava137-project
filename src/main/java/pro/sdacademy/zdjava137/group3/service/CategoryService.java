package pro.sdacademy.zdjava137.group3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pro.sdacademy.zdjava137.group3.entity.Category;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;
import pro.sdacademy.zdjava137.group3.model.CategoryAddDTO;
import pro.sdacademy.zdjava137.group3.model.CategoryUpdateDTO;
import pro.sdacademy.zdjava137.group3.dao.Categories;

import java.util.Collection;
import java.util.Optional;

@Service
public class CategoryService {

    private final Categories categories;


    public CategoryService(Categories categories) {
        this.categories = categories;
    }

    public Collection<Category> getCategories(Pageable pageable) {
        Page<Category> categoryPage = categories.findAll(pageable);
        return categoryPage.getContent();
    }

    public Optional<Category> getCategoryById(long id) {
        return categories.findById(id);
    }

    public Category createCategory(CategoryAddDTO dto) {
        Category category = new Category();
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        category.setParent(dto.getParent());
        return categories.save(category);
    }

    public Category update(long id, CategoryUpdateDTO dto) {
        Category category = fetchCategoryById(id);
        if (dto.getName() != null) {
            category.setName(dto.getName());
        }

        if (dto.getDescription() != null) {
            category.setDescription(dto.getDescription());
        }

        if (dto.getParent() != null) {
            category.setParent(dto.getParent());
        }

        return categories.save(category);
    }

    private Category fetchCategoryById(long id) {
        return categories.findById(id)
                .orElseThrow(() -> new NotFoundException("Product with id " + id + " not found"));
    }



    public void deleteCategory(long categoryId) {
        if (!categories.existsById(categoryId)) {
            throw new NotFoundException("Category with id " + categoryId + " not found");
        }
        categories.deleteById(categoryId);
    }
}
