function Router() {
  this.routes = {};
  this.query = {};
  this.path = '';
  this.url = '';
}

Router.prototype = {
  route: function route(path, callback) {
    this.routes[path] = callback || function () {};
  },
  refresh: function refresh() {
    this.path = window.location.pathname || '/';
    this.query = new URLSearchParams(window.location.search);

    if (this.routes[this.path] !== undefined) {
      this.routes[this.path]();
    } else {
      console.log('404');
    }
  },
  init: function init() {
    window.addEventListener('load', this.refresh.bind(this), false);
  },
  push: function push(path, query) {
    this.path = path;

    this.query = new URLSearchParams();
    for (const key in query) {
      if (query[key]) {
        this.query.set(key, query[key]);
      }
    }

    window.history.pushState(null, null, `${this.path}?${this.query.toString()}`);

    if (this.routes[this.path] !== undefined) {
      this.routes[this.path]();
    } else {
      console.log('404');
    }
  },
};

const router = new Router();

router.route('/', function() {
  console.log('home');
})

router.route('/product', function() {
  console.log('product');
})

router.route('/teams', function() {
  console.log('teams');
})

router.route('/culture', function() {
  console.log('culture');
})

router.route('/joinus', function() {
  console.log('joinus');
})

router.init();
