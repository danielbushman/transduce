var R = require('ramda');

var dotPath = function (path, obj, i) {
  if (obj == null) {
    return;
  }
  else {
    return R.path(path.split('.'), obj);
  }
}

module.exports = dotPath;


    // try:
    //     nested_data = _dict.copy()
    //     path_parts = path.split('.')
    //     for path_part in path_parts:
    //         search = re.search(r"(.+)\[([i0-9]+)\]", path_part)
    //         if search:
    //             path_part_no_index = re.sub(r'\[([i0-9]+)\]', '', path_part)
    //             if isinstance(nested_data[path_part_no_index], list):
    //                 index = search.group(2)
    //                 index = i if index == 'i' else int(index)
    //                 nested_data = nested_data[search.group(1)][index]
    //             else:
    //                 nested_data = nested_data[path_part_no_index]
    //         else:
    //             nested_data = nested_data[path_part]
    //     return nested_data
    // except (KeyError, IndexError, TypeError):
    //     # This debug log can get super noisy. Uncomment only when needed.
    //     # log.debug('value for path "%s" does not exist in dict', path)
    //     return None
