const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const func = iface[name];
    if (typeof func === 'function') {
      names.push([name, func.length]);
    }
  }
  return names;
};
methods