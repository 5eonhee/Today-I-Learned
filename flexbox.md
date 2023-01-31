## FLEXBOX 

 연습 (https://flexboxfroggy.com/#ko)
 
_display:flex(inline-flex)_ 에서 표현 가능한 속성

```
justify-content : 가로선 상에서 정렬 

flex-start(default), flex-end, center, space-between, space-around
```

```
align-items : 세로선 상에서 정렬

flex-start, flex-end, center, baseline, stretch(default)
```

```
align-self : align-items 무시하고, 세로선 상에서 정렬

flex-start, flex-end, center, baseline, stretch
```

```
align-content : 세로선 상에 공간 있는 경우 간격 조절

flex-start, flex-end, center, space-between, space-around, stretch(default)
```

```
flex-direction : 정렬 방향

row(default), row-reverse, column, column-reverse
```

```
flex-wrap : 한 줄/여러 줄에 걸쳐 정렬

nowrap(default), wrap, wrap-reverse
```

```
flex-flow : flex-direction + flex-wrap
```

<br>
<br>

_flex-item_ 에서 표현 가능한 속성

```
order : 요소의 순서 지정
```

```
flex-basis : 초기 크기 세팅
```

```
flex-grow : 여분의 공간이 있으면 영역 확장

0, 1
```

```
flex-shrink : 여분의 공간이 없으면 영역 축소

0, 1
```

```
flex : grow, shrink, basis 동시 진행
```
