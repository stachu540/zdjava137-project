package pro.sdacademy.zdjava137.group3.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pro.sdacademy.zdjava137.group3.entity.Category;
import pro.sdacademy.zdjava137.group3.entity.Product;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;
import pro.sdacademy.zdjava137.group3.model.ProductAddDTO;
import pro.sdacademy.zdjava137.group3.model.ProductUpdateDTO;
import pro.sdacademy.zdjava137.group3.repo.ProductRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Collection<Product> getProducts(Pageable pageable) {
        Page<Product> productPage = productRepository.findAll(pageable);
        return productPage.getContent();
    }
    public Optional<Product> getProductById(long id) {
        return productRepository.findById(id);
    }


    public Product create(ProductAddDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());

        return productRepository.save(product);
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

        return productRepository.save(product);
    }

    private Product fetchProductById(long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Product with id " + id + " not found"));
    }
    public void deleteProduct(long productId) {
        if (!productRepository.existsById(productId)) {
            throw new NotFoundException("Product with id " + productId + " not found");
        }
        productRepository.deleteById(productId);
    }

    public Collection<Product> getProductsByCategory(long categoryId) {
        List<Product> products = productRepository.findByCat
    }

}
