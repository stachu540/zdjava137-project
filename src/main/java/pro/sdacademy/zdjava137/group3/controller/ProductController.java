package pro.sdacademy.zdjava137.group3.controller;


import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.sdacademy.zdjava137.group3.entity.Product;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;
import pro.sdacademy.zdjava137.group3.model.ProductAddDTO;
import pro.sdacademy.zdjava137.group3.model.ProductUpdateDTO;
import pro.sdacademy.zdjava137.group3.service.ProductService;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public Collection<Product> getProducts(@PageableDefault(size = 10, sort = "id") Pageable pageable) {
        return productService.getProducts(pageable);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable long id) {
        Optional<Product> product = productService.getProductById(id);
        return product
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductAddDTO dto) {
        Product createdProduct = productService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody ProductUpdateDTO dto) {
        Product updatedProduct = productService.update(id, dto);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Product> deleteProduct(@PathVariable long id) {

        try {
            productService.deleteProduct(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }
        catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        }

    }

}
