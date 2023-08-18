import {Item} from "./Item"

export function ItemList ({ itemList = [] }) {
    return (

      <section>
        {itemList.map((pro) => {
          return (
            <Item
              name={pro.name}
              description={pro.description}
              price={pro.price}
            />
          );
        })}

      </section>
    );
  }