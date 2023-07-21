import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {map, Observable, of, pluck} from "rxjs";
import {CategoriesService} from "./service/categories.service";
import {CommentsModService} from "./service/comments.service";
import {ProductsService} from "./service/products.service";

@Injectable()
export class AppTitlePrefix extends TitleStrategy {
  constructor(private title: Title) {
    super();
  }
  override updateTitle(snapshot: RouterStateSnapshot) {
    const title = this.buildTitle(snapshot);
    let raw = "Auction"
    if (title) {
      raw = raw + ` - ${title}`
    }
    this.title.setTitle(raw);
  }
}
@Injectable({
  providedIn: 'root'
})
export class CategorySingletonTitle implements Resolve<string> {
  constructor(private service: CategoriesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const id = route.queryParamMap.get("id")
    if (!id) {
      return of("");
    }
    return this.service.get(parseInt(id)).pipe(map(data => data.name))
  }
}
@Injectable({
  providedIn: 'root'
})
export class NewProductTitle implements Resolve<string> {
  constructor(private service: CategoriesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const id = route.queryParamMap.get("id")
    let raw = " - New Product"
    if (!id) {
      return of("New Product");
    }
    return this.service.get(parseInt(id)).pipe(map(data => `Category: ${data.name} - New Product`))
  }
}
@Injectable({
  providedIn: 'root'
})
export class CommentsOfProductTitle implements Resolve<string> {
  constructor(private service: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const id = route.queryParamMap.get("id")
    let raw = ""
    if (state.url.indexOf("admin") > -1) {
      raw = `Admin`
    }
    if (!id) {
      return of(raw);
    }
    return this.service.get(parseInt(id)).pipe(map(data  => {
      return raw + ((raw === "admin") ? " - " : "") + "Comments of " + data.name
    }))
  }
}
@Injectable({
  providedIn: 'root'
})
export class ProductSingletonTitle implements Resolve<string> {
  constructor(private service: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const id = route.queryParamMap.get("id")
    if (!id) {
      return of("New Product");
    }
    return this.service.get(parseInt(id)).pipe(map(data => `Product: ${data.name}`))
  }
}
