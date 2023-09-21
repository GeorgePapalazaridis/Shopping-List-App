# Angular notes

## Angular Installation:

### how we set up angular (globally) on our computer

`npm install -g @angular/cli`

### how we create a new project

`ng new file_name`
or
if we don't want to have strict mode:
`ng new file_name --no-strict`

### how we run the project on the browser

We can run the project on the browser by running on terminal the command `ng serve` in there we can click on localhost link in order to open.
If we want to open it directly we can add the flag `--open`.
so, the whole code we will be like:
`ng serve --open`

## Bootstrap

### how to install bootstrap

`npm install bootstrap@3`

(`@3` is referred to bootstrap version)
this will be installed locally for the specific project and Not globally.

### how to use bootstrap in my project

- first way, Adding the Bootstrap CSS to the styles Array in angular.json':

We also need to let angular know about this bootstrap package and we do that through the "angular.json" file.
In the "angular.json" at the field `architect > build > styles :` and in there we gave to add the path:
`"node_modules/bootstrap/dist/css/bootstrap.min.css",`

(it needs the whole path) above the `"src/styles.css`.

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

- second way, Using Bootstrap via CDN:

Instead of adding Bootstrap to your project as a dependency, you can also use Bootstrap via a Content Delivery Network (CDN) by adding the Bootstrap CSS link to your index.html file. This is a simpler approach and doesn't require modifying your angular.json file.

In your `index.html` file, you can add the following line within the `<head>` section:

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

This method allows you to use Bootstrap without including it in your project's build, which can be advantageous if you're not using the entire Bootstrap library and want to save on bundle size.

Both methods are valid, and you can choose the one that best suits your project's needs. If you're planning to extensively use Bootstrap's features and styles, including it in your project via angular.json is a good approach. On the other hand, if you only need a few Bootstrap components or styles, using a CDN link might be more efficient.

### How to check if bootstrap works

- We stop the server (ctrl+c) and we run it again (ng serve)
- we inspect the page and we checking at the `element` and `sources` sections
- At the `element` section we see that at the header the `styles.css` has been imported
- and at the `sources > styles.css` at the top of the file we notice that there is a note about the bootstrap version.

So, now we are sure that everything works properly.

## Angular components & modules

- module: is a bundle of functionalities. Gives angular information about the features that my app has and uses.

- component: element that is reusable and we use it to build webpages.

### Angular Component files

Is not enough to just create some new file. Angular will not know about that if we don't tell it because it doesn't scan all the files of the project. So, we have to register that new file in the module file.

So, in order to know angular about our new files, we have to:

- go to the module's file
- import our new file at the top of the page But without the file extension (this is important!)
- and last, to pass the name of our new class into `@NgModule > declaration`

e.g.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### How to create new component from cli

`ng generate component file_name`
or shortcut
`ng g c file_name`

After running the above command in the terminal a new component file will automatically create

### .component.ts and .component.html

If we have a few lines inside the `file_name.component.html` we can delete the file and pass those few lines into the file_name.component.ts.
That we can do by converting the `templateUrl` to `template` and passing directly the nested component with the html code into ` `.

e.g.

this one:

```
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
```

could be like this:

```
@Component({
  selector: 'app-servers',
  template: `
    <p>servers work!</p>
    <app-server></app-server>
    <app-server></app-server>
    <!-- We passed directly the code from the file_name.component.html to file_name.component.ts -->
  `,
  styleUrls: ['./servers.component.css']
})
```

This is a good approach if they have a few lines of good into the .html. Otherwise we keep the approach where we pass the url of the .html file!

### .component.ts and .component.css

We can follow the same logic and for `.component.css`!

for example, we can turn the:

```
..styleUrls: ['./servers.component.css']...
```

to:

```
..styles: ['
  h3{
    color: blue;
  }
']...
```

Be careful!!

- It's `styles` with `s` in the end and Not `style`
- We still need the `[]` and the '\`\`' inside the brackets like this ` [``] `

### selector (options)

We said that the name that we have to choose for the component must be unique!

Other than that we have three approach to call the component:

- as a tag <app-new-component></app-new-component>
  and we set it in class's selector like this:
  `selector: 'app-servers'`

- as a class <div class="app-new-component"></div>
  and we set it in class's selector like this:
  `selector: '.app-servers'`

- and as an attribute <div app-new-component></div>
  and we set it in class's selector like this:
  `selector: '[app-servers]'`

Generally we must use the tag option selector!!

## Databinding or else Communication!

Communication between the Typescript code (business logic) and the Template (html).

Generally we can use at the output data:

- String Interpolation --> {{data}}
  or
- Property Binding --> [property] = "data"

### Dynamically binding property

we can inform Angular that we want to bind an lement's property by using brackets `[]`.

for instance,

one of many `button` element properties is the `disabled` property.

If we want to indicate angular that we want to dynamically bind some property we must to place it inside brackets like this:
`<button class="btn btn-primaty" [disabled]="!allowAddServer">`

or

`<p [innerText]="allowAddServer"></p>` (Property Binding)

which is equal to this:

`<p>{{allowAddServer}}</p>` (String Interpolation)

**Generally, if we want to display a value or text dinamically in our template we can use String Interpolation and if we want to change some property we use Property Binding.**

**BUT hey!!**
How do I know to which Properties or Events of Html elements I may bind?

- I can basically bind to all properties and Events with `console.log()` to the element I am interested in in order to see whivh properties and events is offers.

for example:
`const myElement = document.querySelector('#myElement');`
// Replace with the appropriate selector
`console.log(myElement);`

### Databinding

We can implement it by using for exmple the `(input)` event on an `input` tag, that's like this:

```
    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email"
                (input)="onUpdateEmail($event)">
```

### Tow Way Databinding

In order to be able to use Tow way Databinding we have to adding the `FormsModule` to the `imports[]` array in `app.module.ts` and ofcourse to impot it at the top of the file like this :
`import { FormsModule } from '@angular/forms';`

We must also have to import it at the top of the .ts file that we are going to use it.

After that declaration we can use it in the component add these in the tag attributes:

`[(ngModel)]="prop_Name" name="prop_Name">`

and the whole code would be like this:

`<input type="text" class="form-control" id="exampleInputUser" [(ngModel)]="prop_Name" name="prop_Name">`

**It's a nice and ease way of reacting two events on both directions**

## DIRECTIVES!!

### Structural Directives

Directives is instruction in the DOM by adding ot remove elements!

For example, components are actualy instruction in the DOM.
Once we placed the `selector` of our component, at this point of time we instructing Angular to add the content of our component template and the bussiness logic in .ts file, in this place where we use the selector, this is our instruction!

The above is an example of directive with a template.
Ofcourse there are Directives without a template!

The fisrt Directive without a tamplate is the `*ngIf` which accept boolean values (true/false)!

#### \*ngIf

In order to use `*ngIf` we have to set a variable as a boolean. This variable we are going to handle it in a method which will tricked from an event listener of a button, let's say `(click)="onClickMethod()"`. The `*ngIf` directive placed at the element that we want to do something with that in a specidic situation.
Here it is an example:

```
<!-- in .component.html: -->
<div class="container">
    <div class="row col-xs-6">
        <button class="btn btn-warning" (click)="onClickAccountExist()">
            Sing up
        </button>
        <p *ngIf="!accountExist">Do you already have an account?</p>

        <p *ngIf="accountExist">We happy to see you again!!</p>

    </div>
</div>

<!-- in .component.ts: -->
export class NewButtonComponent {
  accountExist:boolean = false;
  userName:string = 'George';

  onClickAccountExist() {
    this.accountExist = !this.accountExist;
  }
}
```

#### else

Other than that, we can also use the `else` directive which specify what is going to happen in an other specific situation. The logic is basically the same with that of `if/else` in Js. We can use the `else` directive in tis way:

```
  <!-- in .component.html: -->
<div class="container">
    <div class="row col-xs-6">
        <button class="btn btn-warning" (click)="onClickAccountExist()">
            Sing up
        </button>
        <p *ngIf="!accountExist">Do you already have an account?</p>


<!-- from here -->
        <ng-template #noAccount>
            <p>
                We happy to see you again {{userName}}!!
            </p>
        </ng-template>
<!-- to here -->

    </div>
</div>
```

Actually, another way which has the same results is:
`<p *ngIf="accountExist">We happy to see you again!!</p>`

which the opposite from the first `*ngIf` so that's why it has the opposite results!

#### ngFor

<!-- I have to read it a little bit more... -->

The `*ngFor` is a Structural Directive and it is pretty similar with the `for` loop in Js.

We use it as the `*ngIf` in the tag element in this way:
`<p *ngFor="let logItem of log">{{logNumber}}</p>`

In the above example:

- the `logItem` is like `i` in for loop and we can use as a String Interpolation as well,
- `log` is the Array that we have declare in our class.
- we can add more information about our iteration by using the `index` like this: `<p *ngFor="let logItem of log; let i = index">{{logNumber}}</p>`
  `i` is a random name, it could be anything, e.g. value.
- now we can check the iteration of the loop with the index of the array like this:

```
<p *ngFor="let logItem of log" [ngClass]="{'green-bg': i >= 5}">
  <span [ngStyle]="{color: i >= 7 ? 'black' : 'white'}">
    {{logItem}}
  </span>
</p>
```

### Attribute Directives

Attrubute directives look like normal html attributes and they can only change the element where they placed on But without the `*` symbol infront of them. This is used only on Structural Directives.

On Attribute Directives we use brackets `[]` because we want to indicate to angular that we want to bind some properties on this directive.

The brackets are not part of the directive name, the directive name is just `ngStyle`.

**Becareful --> Property binding is Not the same with Directive Binding**

#### ngStyle

`ngStyle` allows us to dynamically **asign a style**!

So, how we use the `ngStyle`:

```
<!-- we set it as an attribute on an element inside brackets: -->

<p [ngStyle]="{backgroundColor: getColor();}">
```

Ofcourse we have to declare the `getColor();` function in the class:

```
getColor() {
    return this.accountExist === true ? 'green' : 'red';
  }
```

**For the styling properties we can use either the camelCase `backgroundColor: getColor();` syntax or we must use quotes `'background-color':getColor();` and the classic css rules with the dush**

#### ngClass

`ngClass` allow us to dynamically **add or remove css classes**!

With this directive we can set a class and use it only under a specific condition.
So, we use the `ngClass` in brackets like this:

```
<!-- we place it as an attribute in an element: -->
<p [innerText]="txtForUserUpdated" [ngClass]="{account: getBtnClass()}"></p>

<!-- if the getBtnClass() returns true then it's adding the class -->

```
