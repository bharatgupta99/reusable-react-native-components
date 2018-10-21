# Reusable React Native Components


Download any component you want to use and put in seperate folder(recommended) or root and the import is your app.js file using 


>import Card from './Card'

### 1. Card

```javascript
<Card>
	<Text />
	<Image />
	//any arbitrary no. of children
</Card>
```

### 2. CardSection

```javascript
//better if you use above mentioned card as children of CardSection 
<CardSection>
	<Card />
	<Card />
	//any arbitrary no. of Cards
</CardSection>
```

### 3. Button

```javascript
<Button 
	onPressed={}  /* function you want to preform */
	text="" /*button text */
/>
```

### 4. Header

```javascript
<Header 
	headerText="" /*text of header*/
/>
```

### 5. Input

```javascript
<Input
	label="" /*label of input box*/
	secureTextEntry /*add this property if its a password type*/
	placeholder="" /*placeholder text inside input box*/
	value="" /*initial value inside input box*/
	onChangeText="" /*function to perform when text changes*/
/>
//last two properties are mainly used when you want to change value of state of a class-based component
```
