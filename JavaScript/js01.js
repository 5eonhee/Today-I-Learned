<script>
// 1. 숫자형
//   Number(a);
//   (a * 1);

// 2. 문자형
//   String(b);
//   '' + b;

  function sumStr01(a, b) {
    var sum = Number(a) + Number(b);

    return String(sum);
  }

  function sumStr02(a, b) {
    var sum = (a * 1) + (b * 1);

    return '' + sum;
  }
</script>
