# Heros

- create a `heros` folder
- create a `heros.html` inside this folder
- create a `heros.js` inside this folder

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Heros</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
</head>

<body>
    <h2>Marvel Heros</h2>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col" class="sortBtn">ID</th>
                <th scope="col" class="sortBtn">NAME</th>
                <th scope="col" class="sortBtn">DESCRIPTION</th>
                <th scope="col" class="sortBtn">RETURNED</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <script src="./heros.js"></script>
</body>

</html>
```
