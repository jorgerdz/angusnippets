angusnippets
============

A simple directive for enabling preconfigured text snippets in Angular inputs.
To see a demo go here: http://jorgerdz.github.io/angusnippets


### Getting Started
Download the code, and include the angusnippets.js and angusnippets.css file in your page. Then add the angusnippets module to your Angular App file, e.g.
```html
var app = angular.module('app', ["angusnippets"]);
```

### How to Use
Under your controller, specify an array of objects with all the snippet values you want.
```javascript
$scope.snippetsAvailable = [
       { title : "Here's the first snippet" },
    { title : "And another one" },
    { title : "One last one" }
];
````
Specify the input where you want snippets to be available using the 'angusnippets' directive at the element level. The 'key' value specifies the trigger character for the snippets to show up (they will only show up if the key value is detected as the first character in the input). 'selectedobject' is used to map the selected snippet to a $scope value. 
```html
<angusnippets key="@" snippets="snippetsAvailable" selectedobject="selectedSnippet"></angusnippets>
```

### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| key | Trigger key for showing the snippets | Yes | '@' |
| placeholder | Placeholder text for the search field | No | Type '@' for showing the available snippets |
| selectedobject | Where to store the selected object in your model/controller (like ng-model) | Yes | myObject |
| inputclass | The classes to use for styling the input box | No | form-control |
| snippets | The snippet values. Should be an array of objects | No | countriesList |


###To do
- [ ] Activate trigger from any place in the input string, not just the first character

### License
The angusnippets project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2014.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
