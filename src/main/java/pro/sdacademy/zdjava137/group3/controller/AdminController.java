package pro.sdacademy.zdjava137.group3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdminController {


    @GetMapping("/admin")
    public String admin(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }

    @GetMapping("/admin/users/{id}")
    public String adminUser(@PathVariable long id, Model model) {
        return "admin/index";
    }

    @GetMapping("/admin/users")
    public String adminUsers(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/products")
    public String adminProducts(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/products/{id}")
    public String adminProduct(@PathVariable long id, Model model) {
        return "admin/index";
    }

    @GetMapping("/admin/categories")
    public String adminCategories(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/categories/{id}")
    public String adminCategory(@PathVariable long id, Model model) {
        return "admin/index";
    }
}
