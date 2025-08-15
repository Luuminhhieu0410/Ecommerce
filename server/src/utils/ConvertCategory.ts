import { ConvertCategory } from 'src/types/category.type';
export function convert(data: ConvertCategory[]): ConvertCategory[] {
  const map: Record<number, ConvertCategory> = {};
  const roots: ConvertCategory[] = [];

  data.reduce((acc, item) => {
    // Tạo node rỗng có children
    map[item.id] = map[item.id] || { ...item, children: [] };

    // Merge lại dữ liệu
    Object.assign(map[item.id], item);

    if (item.parent_id === null) {
      roots.push(map[item.id]);
    } else {
      map[item.parent_id] = map[item.parent_id] || { ...item, children: [] };
      map[item.parent_id].children!.push(map[item.id]);
    }
    return acc;
  }, map);

  return roots;
}
