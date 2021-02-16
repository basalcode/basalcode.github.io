1. 특정 시간 대의 값 구하기

SELECT *
FROM tableA
WHERE tableA date_format(someDatetime, '%Y-%m-%d') ≥ 0000-00-00
AND tableA date_format(someDatetime, '%Y-%m-%d') ≤ 0000-00-00

2. 두 시간 사이의 차이 구하기

SELECT TIMESTAMPDIFF(MINUTE, time1, time2) // time1과 time2 사이에 몇분의 차이가 있는지 알 수 있다.