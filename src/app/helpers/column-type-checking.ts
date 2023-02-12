export default function (data: any, ColumnModel: any[]) {
  const newDocVersion = ColumnModel.map((col) => ({
    ColumnDef: col.ColumnDef,
    ValueType: col.ValueType,
  }));

  const combined = Object.entries(data).map((item) => [
    ...item,
    ...[newDocVersion.filter((doc) => doc.ColumnDef === item[0])[0].ValueType],
  ]);

  const newObj = combined.reduce((a, v) => {
    let newval: unknown;

    switch (String(v[2])) {
      case 'number': {
        newval = +String(v[1]);
        break;
      }
      case 'boolean': {
        newval = String(v[1]) === 'true';
        break;
      }
      default: {
        newval = String(v[1]);
        break;
      }
    }

    return { ...a, [String(v[0])]: newval };
  }, {});

  return newObj;
}
