import Filter from './components/Filter';
import Header from './components/Header';
import List from './components/List';
import Nav from './components/Nav';
import './App.scss';

const App = async () => {
  Header();
  Filter();
  List();
  Nav();
};

document.addEventListener('DOMContentLoaded', App);
