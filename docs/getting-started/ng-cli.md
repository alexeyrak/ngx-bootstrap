### Getting started with angular-cli
 
#### Installing angular-cli

*Note*: you can skip this part if you already have application generated by `ng-cli` and webpack
  
```bash
npm i -g @angular/cli
ng new my-app
cd my-app
ng serve
```

#### Adding ngx-bootstrap
 
 - install `ngx-bootstrap` and `bootstrap`

 ```bash
   npm install ngx-bootstrap bootstrap --save
 ```
 
- open `src/app/app.module.ts` and add

```typescript
import { AlertModule } from 'ngx-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule.forRoot(), ... ],
    ... 
})
```

- open `.angular-cli.json` and insert a new entry into the styles array 

```json
      "styles": [
         "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css",
      ],
```

- open `src/app/app.component.html` and add
```
<alert type="success">hello</alert>
```