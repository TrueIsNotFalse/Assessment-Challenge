# Assessment Challenge

---

## Presentation/View Layer

* React
* Material UI
* HTML
* CSS
* Javascript
* JSX

---

## Services/Controller Layer

* Python3
* Flask
* SQLALchemy ORM

---

## Persistence/Model Layer

* MySQL 5.7

---

### How to run

launch mysql 5.7 and make sure it is running
make sure port 3306 is open

In the terminal starting from base directory

``` markdownlint(MD040)
cd backend
pip install --upgrade pip | pip install --upgrade pip --user
pip3 install -r requirements.txt
DB_USER=root DB_PASSWORD=root DB_HOST=localhost DB_PORT=3306 DB_DATABASE=reason FLASK_HOST=0.0.0.0 FLASK_PORT=3001 python3 -m api.app
```

Open another terminal(tty) starting from the base directory

``` markdownlint(MD040)

cd frontend-react
npm install
npm start
```

### Run unittests

`DB_USER=root DB_PASSWORD=root DB_HOST=localhost DB_PORT=3306 DB_DATABASE=reason python3 -m unittest discover tests`

```markdownlint(MD040)
.
├── README.md
├── backend
│   ├── api
│   │   ├── __init__.py
│   │   ├── app.py
│   │   └── views
│   │       ├── __init__.py
│   │       ├── my_info_view.py
│   │       └── reasons_view.py
│   ├── model
│   │   ├── __init__.py
│   │   ├── engine
│   │   │   ├── __init__.py
│   │   │   └── db.py
│   │   └── reason_model.py
│   ├── requirements.txt
│   └── tests
│       ├── __init__.py
│       └── test_models
│           ├── __init__.py
│           ├── test_engine
│           │   ├── __init__.py
│           │   └── test_engine.py
│           └── test_reason.py
└── frontend-react
    ├── build
    │   ├── asset-manifest.json
    │   ├── index.html
    │   ├── manifest.json
    │   ├── precache-manifest.79f52a8489c2333a48debf900fb88134.js
    │   ├── resume.pdf
    │   ├── service-worker.js
    │   └── static
    │       ├── css
    │       │   ├── 2.94155858.chunk.css
    │       │   ├── 2.94155858.chunk.css.map
    │       │   ├── main.c2d84c98.chunk.css
    │       │   └── main.c2d84c98.chunk.css.map
    │       ├── js
    │       │   ├── 2.191d6d63.chunk.js
    │       │   ├── 2.191d6d63.chunk.js.map
    │       │   ├── main.9dc480dc.chunk.js
    │       │   ├── main.9dc480dc.chunk.js.map
    │       │   ├── runtime~main.a8a9905a.js
    │       │   └── runtime~main.a8a9905a.js.map
    │       └── media
    │           ├── profilepic.009fcfde.jpg
    │           ├── resume.d8cda69f.pdf
    │           ├── roboto-latin-100.987b8457.woff2
    │           ├── roboto-latin-100.e9dbbe8a.woff
    │           ├── roboto-latin-100italic.6232f43d.woff2
    │           ├── roboto-latin-100italic.d704bb3d.woff
    │           ├── roboto-latin-300.55536c8e.woff2
    │           ├── roboto-latin-300.a1471d1d.woff
    │           ├── roboto-latin-300italic.210a7c78.woff
    │           ├── roboto-latin-300italic.d69924b9.woff2
    │           ├── roboto-latin-400.5d4aeb4e.woff2
    │           ├── roboto-latin-400.bafb105b.woff
    │           ├── roboto-latin-400italic.9680d5a0.woff
    │           ├── roboto-latin-400italic.d8bcbe72.woff2
    │           ├── roboto-latin-500.28546717.woff2
    │           ├── roboto-latin-500.de8b7431.woff
    │           ├── roboto-latin-500italic.510dec37.woff2
    │           ├── roboto-latin-500italic.ffcc050b.woff
    │           ├── roboto-latin-700.037d8304.woff2
    │           ├── roboto-latin-700.cf6613d1.woff
    │           ├── roboto-latin-700italic.010c1aee.woff2
    │           ├── roboto-latin-700italic.846d1890.woff
    │           ├── roboto-latin-900.19b7a0ad.woff2
    │           ├── roboto-latin-900.8c2ade50.woff
    │           ├── roboto-latin-900italic.7b770d6c.woff2
    │           └── roboto-latin-900italic.bc833e72.woff
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── resume.pdf
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── components
        │   ├── API_doc.js
        │   ├── about.js
        │   ├── avatar.js
        │   ├── main_components
        │   │   ├── drawer.js
        │   │   ├── footer.js
        │   │   ├── header.js
        │   │   ├── main_reason.js
        │   │   └── resume.js
        │   ├── paper.js
        │   ├── reason_form.js
        │   ├── reason_item.js
        │   ├── reasons.js
        │   ├── static
        │   │   ├── contents
        │   │   │   └── resume.pdf
        │   │   ├── images
        │   │   │   └── profilepic.jpg
        │   │   └── svg
        │   │       ├── facebook.svg
        │   │       ├── github.svg
        │   │       ├── gmail.svg
        │   │       ├── linkedin.svg
        │   │       ├── medium.svg
        │   │       └── twitter.svg
        │   └── techstack.js
        └── index.js

22 directories, 88 files
```
