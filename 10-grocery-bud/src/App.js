import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [singleItem, setSingleItem] = useState('');
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState({
    bool: false,
    type: '',
    msg: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (singleItem && !isEditing) {
      const newSingleItem = {
        id: new Date().getTime().toString(),
        item: singleItem,
      };
      setItems([...items, newSingleItem]);
      setSingleItem('');
      displayAlert(true, 'success', 'item added to the list');
    } else if (!singleItem) {
      displayAlert(true, 'danger', 'please enter value');
    } else {
      const updatedList = items.map((item) => {
        if (item.id === editId) item.item = singleItem;
        return item;
      });
      setItems(updatedList);
      displayAlert(true, 'success', 'value changed');
      setIsEditing(false);
      setSingleItem('');
    }
  };

  const displayAlert = (bool = false, type = '', msg = '') => {
    setAlert({
      bool,
      type,
      msg,
    });
  };

  const clearItems = () => {
    setItems([]);
    displayAlert(true, 'danger', 'empty list');
  };

  const clearItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    displayAlert(true, 'danger', 'item removed');
  };

  const editItem = (id) => {
    setSingleItem(items.find((item) => item.id === id).item);
    setEditId(id);
    setIsEditing(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      displayAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.bool && (
          <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={singleItem}
            onChange={(e) => setSingleItem(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {items.length === 0 ? null : (
        <div className="grocery-container">
          {items.map((item) => {
            return (
              <List
                key={item.id}
                {...item}
                clearItem={clearItem}
                editItem={editItem}
              />
            );
          })}
          <button className="clear-btn" onClick={clearItems}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
