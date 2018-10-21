# Reusable React Native Components

> Dont forget to import first

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
//better if you use above mentioned card
<CardSection>
	<Card />
	<Card />
	//any arbitrary no. of Cards
</CardSection>
```

### 3. Button

```javascript
<Button onPressed={/* function you want to preform */} text="/*button text */" />
```

### 4. Header

```javascript
<Header headerText="/*text of header*/" />
```

### 5. Input

```javascript
<Input
	label="/*label of input box*/"
	secureTextEntry /*add this prop if its a password type*/
	placeholder="/*placeholder text inside input box*/"
	value="/*initial value inside input box*/"
	onChangeText="/*function to perform when text changes*/"
/>
```
