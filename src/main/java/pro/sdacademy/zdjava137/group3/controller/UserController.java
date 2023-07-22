package pro.sdacademy.zdjava137.group3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.sdacademy.zdjava137.group3.collection.UserCollection;
import pro.sdacademy.zdjava137.group3.entity.User;
import pro.sdacademy.zdjava137.group3.service.UserCrudService;


import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserCrudService userCrudService;

    @GetMapping
    public UserCollection getAll() {
        return new UserCollection(userCrudService.getAll());
    }

    @GetMapping("/api/user/{id}")
    public User getById(@PathVariable final long id) throws Exception {
        return userCrudService.findById(id);
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody final User user) throws URISyntaxException {
        return ResponseEntity
                .created(new URI("/api/user" + "/" + userCrudService.create(user).getId().toString()))
                .build();
    }

    @PutMapping("/api/user/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody final User user, @PathVariable final long id) throws Exception {
        UserCrudService.update(id, user);
    }

    @DeleteMapping("/api/user/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable final long id) throws Exception {
        userCrudService.delete(id);
    }
}
