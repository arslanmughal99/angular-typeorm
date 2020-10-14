### Angular TypeOrm Module

---

###### Usage:

Install in your existing project through package manager

```bash
npm install --save angular-typeorm@latest
# Or 
yarn add angular-typeorm@latest
```

Or add the following in your `package.json`

```json
"dependencies": {
    "angular-typeorm": "^0.0.1"
}
```

and run `npm install` Or `yarn` to install dependencies.



###### Initialize TypeOrm Module:

Import `AngularTypeormModule` in your app module and provide `ConnectionOptions`.

```ts
import { AngularTypeormModule } from 'angular-typeorm';

@NgModule({
  declarations: [],
  imports: [
    AngularTypeormModule.forRoot({
        // Put your typeorm
        // connection options here  
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
```
