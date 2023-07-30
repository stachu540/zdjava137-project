package pro.sdacademy.zdjava137.group3.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.sdacademy.zdjava137.group3.entity.User;
import pro.sdacademy.zdjava137.group3.model.Pagination;
import pro.sdacademy.zdjava137.group3.service.UserCrudService;

import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserCrudService userCrudService;

    @GetMapping
    public Pagination<User> getAll(
            @RequestParam(required = false, defaultValue = "25") @Min(10) @Max(100) @Positive int limit,
            @RequestParam(required = false, defaultValue = "1") @Positive @Min(1) int page
    ) {
        return userCrudService.getAll(PageRequest.of(page, limit));
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable final long id) {
        return userCrudService.get(id);
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody @Valid User user) {
        user = userCrudService.create(user);
        return ResponseEntity
                .created(URI.create("/api/user/%d".formatted(user.getId())))
                .body(user);
    }

    @PutMapping("/{id}")
    public User update(@RequestBody final User user, @PathVariable final long id) {
        return userCrudService.update(id, user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable final long id) {
        userCrudService.delete(id);
    }
}
