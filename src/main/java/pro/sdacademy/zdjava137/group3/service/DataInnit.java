package pro.sdacademy.zdjava137.group3.service;


import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import pro.sdacademy.zdjava137.group3.dao.Products;
import pro.sdacademy.zdjava137.group3.entity.Product;

@AllArgsConstructor
@Component
public class DataInnit {

    private Products products;

    @PostConstruct
    public void init() {

        Product bike = new Product();

        bike.setName("bike");
        bike.setDescription("Carbon road bike");
        bike.setPrice(45000);
        bike.setQuantity(2);
        products.save(bike);

        Product handlebar = new Product();

        handlebar.setName("handlebar");
        handlebar.setDescription("Carbon handlebar");
        handlebar.setPrice(1800);
        handlebar.setQuantity(42);
        products.save(handlebar);

        Product wheels = new Product();

        wheels.setName("enve wheels");
        wheels.setDescription("Carbon road wheelset");
        wheels.setPrice(5599);
        wheels.setQuantity(19);
        products.save(wheels);

        Product wahooComputer = new Product();

        wahooComputer.setName("Wahoo Bolt v2");
        wahooComputer.setDescription("Cycling computer with gps");
        wahooComputer.setPrice(999);
        wahooComputer.setQuantity(23);
        products.save(wahooComputer);

        Product skinsuit = new Product();

        skinsuit.setName("skinsuit");
        skinsuit.setDescription("racing aero skinsuit");
        skinsuit.setPrice(2233);
        skinsuit.setQuantity(52);
        products.save(skinsuit);


    }
}
