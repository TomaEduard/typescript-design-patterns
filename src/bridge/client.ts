import CircleImplementer from './circle-implementer'
import SquareImplementer from './square-implementer'
import Circle from './circle'
import Square from './square'

// structural
const CIRCLE = new Circle(new CircleImplementer())
CIRCLE.draw()

const SQUARE = new Square(new SquareImplementer())
SQUARE.draw()

















/*
- Structural
- Bridge pattern foloseste compozitia in loc de mostenire, asta inseamna ca atribuim relatia
la initiere si nu este definita in relatia clasei.
Cu alte cuvinte nu vom extinde o alta clasa si vom oferi ca argument modul de implementare
- Ne ajuta sa segregam termenii si implementarea este separata de abstractizare.
*/