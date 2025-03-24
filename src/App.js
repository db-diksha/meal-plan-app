import React, { useState } from 'react';

const mealPlan = [
  { day: 'Monday', meals: [
      { type: 'Breakfast', menu: 'Masala oats/ veggies and roti, with boiled egg whites only', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Paneer/chicken/fish/veggies, brown rice, salad', drink: 'Buttermilk', mandate: 'Curd' },
      { type: 'Snack', menu: 'Roasted chana + 1 apple' },
      { type: 'Dinner', menu: 'Chicken/mixed veggies (broccoli, carrots, peas) + roti' },
  ]},
  { day: 'Tuesday', meals: [
      { type: 'Breakfast', menu: 'Okra subzi, roti, fruits/salad', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Rajma curry with brown rice, steamed spinach', drink: 'Buttermilk', mandate: 'Dal, Curd' },
      { type: 'Snack', menu: 'Handful almonds and walnuts', drink: 'Green Tea' },
      { type: 'Dinner', menu: 'Mushrooms/beans/paneer and sautéed greens + roti' },
  ]},
  { day: 'Wednesday', meals: [
      { type: 'Breakfast', menu: 'Poha with veggies, topped with peanuts', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Grilled fish, rice, dal, salad with mixed greens' },
      { type: 'Snack', menu: 'Roasted Makhana and 1 guava/any fruit' },
      { type: 'Dinner', menu: 'fish/chicken/sabzi,  roti, carrots' },
  ]},
  { day: 'Thursday', meals: [
      { type: 'Breakfast', menu: 'Idli with sambar and coconut chutney', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Mixed vegetable curry, rice/roti, and sautéed veggies', drink: 'Buttermilk', mandate: 'Dal, Curd' },
      { type: 'Snack', menu: 'Greek yogurt with berries' },
      { type: 'Dinner', menu: 'Paneer bhurji/veg sabzi + roti + salad' },
  ]},
  { day: 'Friday', meals: [
      { type: 'Breakfast', menu: 'peas/ beans sabzi with roti, Masala egg whites omelet (2 whites)+ fruits/salad', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Fish/chicken/veggies, rice, dal, Brussels sprouts salad', drink: 'Buttermilk', mandate: 'Curd' },
      { type: 'Snack', menu: 'roasted chickpeas, 1 boiled eggwhites' },
      { type: 'Dinner', menu: 'Soybean, roti, sautéed greens' },
  ]},
  { day: 'Saturday', meals: [
      { type: 'Breakfast', menu: 'Moong dal chilla with mint chutney', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Vegetable biryani with raita', drink: 'Buttermilk', mandate: 'Dal, Curd' },
      { type: 'Snack', menu: 'Handful pistachios and 1 pear' },
      { type: 'Dinner', menu: 'Veggies, roti, salad' },
  ]},
  { day: 'Sunday', meals: [
      { type: 'Breakfast', menu: 'Healthy breakfast of your choice,bowl with mixed fruits and chia seeds', drink: 'Green Tea/Coconut water' },
      { type: 'Lunch', menu: 'Palak paneer with brown rice', drink: 'Buttermilk', mandate: 'Curd' },
      { type: 'Snack', menu: 'Roasted almonds and dates' },
      { type: 'Dinner', menu: 'Vegetable stir-fry with egg bhurji, roti' },
  ]},
];

function App() {
  const [selectedTab, setSelectedTab] = useState('Meal Plan');
  const [selectedDay, setSelectedDay] = useState('Monday');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Meal Plan':
        const dayPlan = mealPlan.find((d) => d.day === selectedDay);
        return (
          <div>
            <h2>{selectedDay} Meal Plan</h2>
            {dayPlan.meals.map((meal, index) => (
              <div key={index}>
                <strong>{meal.type}:</strong> {meal.menu}
                {meal.drink && <div><strong>Drink:</strong> {meal.drink}</div>}
                {meal.mandate && <div><strong>Mandate:</strong> {meal.mandate}</div>}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Cholesterol Management Plan for Rohan Vasisth</h1>
      <div>
        {['Meal Plan', 'Exercise Plans', 'Things to Avoid', 'Cholesterol-Friendly Desserts', 'Cholesterol-Lowering Foods'].map((tab) => (
          <button key={tab} onClick={() => setSelectedTab(tab)}>{tab}</button>
        ))}
      </div>
      {selectedTab === 'Meal Plan' && (
        <div>
          {mealPlan.map((d) => (
            <button key={d.day} onClick={() => setSelectedDay(d.day)}>{d.day}</button>
          ))}
        </div>
      )}
      {renderContent()}
    </div>
  );
}

export default App;
