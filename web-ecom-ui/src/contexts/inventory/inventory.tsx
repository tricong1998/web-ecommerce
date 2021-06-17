import { useCallback, useEffect, useState } from 'react';
import { StockListItem } from 'src/services/api-inventory.type';

// Map<variationId, currentStock>
type InventoryMap = Map<string, number>;

const INVENTORY_KEY = 'inventory';
const inventoryStorage = {
  get() {
    const inventory = JSON.parse(localStorage.getItem(INVENTORY_KEY) || '[]');
    return new Map(inventory) as InventoryMap;
  },
  set(inventory: InventoryMap) {
    const inventoryArray = Array.from(inventory.entries());
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventoryArray));
  },
};

export const useInventory = () => {
  const [inventory, setInventoryMap] = useState<InventoryMap>(new Map());

  const setInventory = useCallback((stock: StockListItem[]) => {
    setInventoryMap((map) => {
      const newMap = new Map(map);
      stock.forEach((i) => newMap.set(i.itemVariationId, i.currentQuantity));
      return newMap;
    });
  }, []);

  useEffect(() => {
    setInventoryMap(inventoryStorage.get());
  }, []);

  useEffect(() => {
    inventoryStorage.set(inventory);
  }, [inventory]);

  return { inventory, setInventory };
};
