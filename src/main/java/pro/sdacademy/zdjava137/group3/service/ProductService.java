package pro.sdacademy.zdjava137.group3.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pro.sdacademy.zdjava137.group3.dao.Categories;
import pro.sdacademy.zdjava137.group3.dao.Products;
import pro.sdacademy.zdjava137.group3.entity.Category;
import pro.sdacademy.zdjava137.group3.entity.Product;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;
import pro.sdacademy.zdjava137.group3.model.ProductAddDTO;
import pro.sdacademy.zdjava137.group3.model.ProductUpdateDTO;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final Products products;
    private final Categories categories;

    public ProductService(Products products, Categories categories) {
        this.products = products;
        this.categories = categories;
    }

    public Collection<Product> getProducts(Pageable pageable) {
        Page<Product> productPage = products.findAll(pageable);
        return productPage.getContent();
    }

    public Optional<Product> getProductById(long id) {
        return products.findById(id);
    }


    public Product create(ProductAddDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());

        return products.save(product);
    }


    public Product update(long id, ProductUpdateDTO dto) {
        Product product = fetchProductById(id);

        if (dto.getName() != null) {
            product.setName(dto.getName());
        }

        if (dto.getDescription() != null) {
            product.setDescription(dto.getDescription());
        }

        if (dto.getPrice() != null) {
            product.setPrice(dto.getPrice());
        }

        if (dto.getQuantity() != null) {
            product.setQuantity(dto.getQuantity());
        }

        return products.save(product);
    }

    private Product fetchProductById(long id) {
        return products.findById(id)
                .orElseThrow(() -> new NotFoundException("Product with id " + id + " not found"));
    }

    public void deleteProduct(long productId) {
        if (!products.existsById(productId)) {
            throw new NotFoundException("Product with id " + productId + " not found");
        }
        products.deleteById(productId);
    }

    public List<Product> getProductsByCategory(long categoryId) {
        List<Product> products = this.products.findByCategory_Id(categoryId);
        getProductsFromSubcategories(categoryId, products);

        return products;
    }

    private void getProductsFromSubcategories(long categoryId, List<Product> products) {
        List<Category> subcategories = categories.findByParent_Id(categoryId);
        for (Category subcategory : subcategories) {
            List<Product> subcategoryProducts = this.products.findByCategory_Id(subcategory.getId());
            products.addAll(subcategoryProducts);
            getProductsFromSubcategories(subcategory.getId(), products);
        }
    }

}
