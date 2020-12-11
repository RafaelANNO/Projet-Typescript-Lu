const add = (a: any, b: any) => a + b;
QUnit.module('add', function() {
  QUnit.test('test de la fonction swap', function(assert) {
    swap(all_option_left, 1, 2);
    let index_a = all_option_left[1];
    let index_b = all_option_left[2];

    assert.equal(all_option_left[1], index_b, "la place s'échange bien ");
    assert.equal(all_option_left[2], index_a, "la place s'échange bien ");
  });
});